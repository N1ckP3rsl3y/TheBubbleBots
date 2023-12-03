import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import pytest

@pytest.fixture
def browser():
    # create Chrome options
    options = Options()

    # add arguments for headless mode and disable GPU
    options.add_argument("--headless")
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1920x1080")  # Set the window size
    options.add_argument("--disable-notifications")

    # create a web driver instance with the specified options
    driver = webdriver.Chrome(options=options)
    yield driver

    # close the browser
    driver.quit()

def test_play_now_button(browser):
    # open the landing page
    browser.get("http://www.bubblebots.xyz:1034/")

    # find and click the "Play Now" button on the home page
    play_now_button = browser.find_element(By.CLASS_NAME, "button")
    play_now_button.click()

    # give some time for the page transition
    time.sleep(5)

    # verify that we are on the game page
    game_board = browser.find_element(By.ID, "gameboard")
    assert game_board.is_displayed(), "Failed to reach the game page."

def test_about_button(browser):
    # open the landing page
    browser.get("http://www.bubblebots.xyz:1034/")

    # find and click the "About" button on the home page
    about_button = browser.find_element(By.LINK_TEXT, "About")
    about_button.click()

    # give some time for the page transition
    time.sleep(5)

    # verify that we are on the about page
    about_heading = browser.find_element(By.TAG_NAME, "h1")
    assert about_heading.text == "ABOUT US", "Failed to reach the About page."
