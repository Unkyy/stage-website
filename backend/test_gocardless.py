#!/usr/bin/env python3
"""
Test script to verify GoCardless integration
"""
import sys
import os

# Add the backend directory to the path
sys.path.insert(0, os.path.join(os.path.dirname(__file__)))

from gocardless_config import gocardless_client

def test_gocardless_connection():
    """Test if we can connect to GoCardless API"""
    try:
        # Try to fetch a list of customers to verify connection
        customers = gocardless_client.customers.list()
        print("✓ Successfully connected to GoCardless API")
        print(f"✓ Found {customers.meta['limit']} customers (or 0 if none)")
        return True
    except Exception as e:
        print(f"✗ Failed to connect to GoCardless API: {e}")
        return False

if __name__ == "__main__":
    print("Testing GoCardless integration...")
    success = test_gocardless_connection()
    if success:
        print("\n✓ GoCardless integration is properly configured!")
    else:
        print("\n✗ GoCardless integration has issues.")
        sys.exit(1)
