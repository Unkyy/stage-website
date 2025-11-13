"""
GoCardless configuration and initialization module
"""
import os
from gocardless_pro import Client
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# GoCardless client initialization
GOCARDLESS_ENVIRONMENT = os.getenv("GOCARDLESS_ENVIRONMENT", "sandbox")
GOCARDLESS_ACCESS_TOKEN = os.getenv("GOCARDLESS_ACCESS_TOKEN")

if not GOCARDLESS_ACCESS_TOKEN:
    raise ValueError("GOCARDLESS_ACCESS_TOKEN environment variable is required")

# Initialize GoCardless client
gocardless_client = Client(
    access_token=GOCARDLESS_ACCESS_TOKEN,
    environment=GOCARDLESS_ENVIRONMENT
)
