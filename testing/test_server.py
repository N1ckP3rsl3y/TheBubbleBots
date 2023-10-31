import requests

BASE_URL = "http://www.bubblebots.xyz:1034/"

def get_response_for_file(file_name):
    url = BASE_URL
    if file_name:
        url += file_name
    return requests.get(url)

def test_index_html():
    response = get_response_for_file("index.html")
    assert response.status_code == 200
    assert b"<html" in response.content

def test_game_html():
    response = get_response_for_file("game.html")
    assert response.status_code == 200

def test_styles_css_css():
    response = get_response_for_file("styles.css.css")
    assert response.status_code == 200

def test_logo_jpeg():
    response = get_response_for_file("logo.jpeg")
    assert response.status_code == 200
    assert response.headers['Content-Type'] == "image/jpeg"

def test_background_jpeg():
    response = get_response_for_file("background.jpeg")
    assert response.status_code == 200
    assert response.headers['Content-Type'] == "image/jpeg"

def test_checkers_css():
    response = get_response_for_file("checkers.css")
    assert response.status_code == 200
