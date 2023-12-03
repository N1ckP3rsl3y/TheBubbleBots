import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import pytest

@pytest.fixture
def browser():
    # Create Chrome options
    options = Options()

    # Add arguments for headless mode and disable GPU
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1920x1080")  # Set the window size
    options.add_argument("--disable-notifications")

    # Create a web driver instance with the specified options
    driver = webdriver.Chrome(options=options)
    yield driver

    # Close the browser
    driver.quit()

def test_play_now_button(browser):
    # Open the landing page
    browser.get("http://www.bubblebots.xyz:1034/")

    # Find and click the "Play Now" button on the home page
    play_now_button = browser.find_element(By.CLASS_NAME, "button")
    play_now_button.click()

    # Give some time for the page transition
    time.sleep(5)

    # Verify that we are on the game page
    game_board = browser.find_element(By.ID, "gameboard")
    assert game_board.is_displayed(), "Failed to reach the game page."
