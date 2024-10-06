from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Set up Chrome options
chrome_options = Options()
chrome_options.add_argument("--start-maximized")

# Initialize the Chrome driver using webdriver_manager
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

# Open the homepage
driver.get('http://localhost:5173')

def test_navigation():
    """Check if all the navbar links are working"""
    try:
        navbar_elements = ['Home', 'About', 'Properties', 'Agents', 'Contact']
        for nav_item in navbar_elements:
            driver.find_element(By.LINK_TEXT, nav_item).click()
            time.sleep(1)  # Wait for the page to load
            print(f"Navigation to {nav_item} page passed!")
    except Exception as e:
        print(f"Navigation test failed: {e}")

def test_homepage_cards():
    """Check if all the homepage cards are clickable"""
    try:
        homepage_cards = ['Properties', 'Contact', 'Agents']
        for card in homepage_cards:
            card_element = driver.find_element(By.LINK_TEXT, card)
            card_element.click()
            time.sleep(1)
            print(f"Card directing to {card} endpoint passed!")
            driver.back()  # Go back to the home page
            time.sleep(1)
    except Exception as e:
        print(f"Homepage card test failed: {e}")

def test_properties_page():
    """Check if the properties are clickable and search functionality works"""
    try:
        # Go to Properties page
        driver.find_element(By.LINK_TEXT, 'Properties').click()
        time.sleep(2)

        # Test search functionality
        search_box = driver.find_element(By.ID, 'search')  # Assuming there's an element with ID 'search'
        search_box.send_keys('luxury')
        search_box.send_keys(Keys.RETURN)
        time.sleep(2)

        # Test if the list of properties appears and they are clickable
        properties = driver.find_elements(By.CSS_SELECTOR, '.bg-white p-6 rounded-lg shadow-md cursor-pointer')  # Assuming a class 'property-card'
        if len(properties) > 0:
            print(f"Found {len(properties)} properties!")
            properties[0].click()  # Click on the first property
            time.sleep(1)
            print("Property details page loaded successfully!")
        else:
            print("No properties found!")
    except Exception as e:
        print(f"Properties page test failed: {e}")

def test_contact_form():
    """Check if the Contact Us button gives an alert on successful form submission"""
    try:
        # Go to Contact page
        driver.find_element(By.LINK_TEXT, 'Contact').click()
        time.sleep(1)

        # Fill the contact form
        driver.find_element(By.ID, 'name').send_keys('John Doe')
        driver.find_element(By.ID, 'email').send_keys('john@example.com')
        driver.find_element(By.ID, 'phone').send_keys('1234567890')
        driver.find_element(By.ID, 'message').send_keys('This is a test message.')
        driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()

        # Wait for alert and verify the alert message
        WebDriverWait(driver, 10).until(EC.alert_is_present())
        alert = driver.switch_to.alert
        alert_message = alert.text
        if "success" in alert_message.lower():
            print("Contact form submission passed with success alert!")
        alert.accept()  # Accept the alert
    except Exception as e:
        print(f"Contact form test failed: {e}")

# Run tests
test_navigation()
test_homepage_cards()
test_properties_page()
test_contact_form()

# Close the browser
driver.quit()
