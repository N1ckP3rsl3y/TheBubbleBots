import pytest
import requests
import subprocess
import time

SERVER_URL = "http://127.0.0.1:PORT_NUMBER"  # replace with our server addr info

# before running tests, start server, end when tests are done
@pytest.fixture(scope="module")
def server_process():
    # start the server
    process = subprocess.Popen(["./server"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(10)  # give server some time to start
    yield process
    process.terminate()

def test_index(server_process):
    response = requests.get(f"{SERVER_URL}/")
    assert response.status_code == 200
    assert "Expected content in index.html" in response.text

def test_test_html(server_process):
    response = requests.get(f"{SERVER_URL}/test.html")
    assert response.status_code == 200
    assert "Expected content in test.html" in response.text

# ... add additional tests for other files

