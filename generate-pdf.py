#!/usr/bin/env python3
"""
PDF Generation Script for Qualia in Dualia Portfolio
This script helps generate a PDF version of the portfolio for committee review.
"""

import os
import subprocess
import sys
import webbrowser
from pathlib import Path

def check_wkhtmltopdf():
    """Check if wkhtmltopdf is installed."""
    try:
        result = subprocess.run(['wkhtmltopdf', '--version'], 
                              capture_output=True, text=True)
        return result.returncode == 0
    except (FileNotFoundError, NotADirectoryError):
        return False

def generate_pdf_with_wkhtmltopdf():
    """Generate PDF using wkhtmltopdf if available."""
    input_file = "pdf-version.html"
    output_file = "Amir_Marvasti_Artist_Application.pdf"
    
    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found!")
        return False
    
    cmd = [
        'wkhtmltopdf',
        '--page-size', 'A4',
        '--margin-top', '0.5in',
        '--margin-right', '0.5in',
        '--margin-bottom', '0.5in',
        '--margin-left', '0.5in',
        '--enable-local-file-access',
        '--print-media-type',
        input_file,
        output_file
    ]
    
    try:
        print("Generating PDF with wkhtmltopdf...")
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        if result.returncode == 0:
            print(f"✅ PDF generated successfully: {output_file}")
            return True
        else:
            print(f"❌ Error generating PDF: {result.stderr}")
            return False
            
    except Exception as e:
        print(f"❌ Error running wkhtmltopdf: {e}")
        return False

def open_in_browser():
    """Open the PDF version in browser for manual PDF generation."""
    html_file = "pdf-version.html"
    
    if not os.path.exists(html_file):
        print(f"Error: {html_file} not found!")
        return False
    
    # Get absolute path
    abs_path = os.path.abspath(html_file)
    file_url = f"file://{abs_path}"
    
    print("🌐 Opening PDF version in browser...")
    print("📋 Instructions for manual PDF generation:")
    print("   1. The page will open in your browser")
    print("   2. Press Ctrl+P (or Cmd+P on Mac) to open print dialog")
    print("   3. Select 'Save as PDF' as destination")
    print("   4. Choose 'A4' page size")
    print("   5. Set margins to 'Minimum' or 'Custom' (0.5 inches)")
    print("   6. Enable 'Background graphics' for best results")
    print("   7. Click 'Save' and choose filename")
    print()
    
    try:
        webbrowser.open(file_url)
        return True
    except Exception as e:
        print(f"❌ Error opening browser: {e}")
        return False

def main():
    """Main function to handle PDF generation."""
    print("🎨 Qualia in Dualia - PDF Portfolio Generator")
    print("=" * 50)
    
    # Check if we're in the right directory
    if not os.path.exists("pdf-version.html"):
        print("❌ Error: pdf-version.html not found!")
        print("Please run this script from the qualia_dualia_portfolio directory.")
        return
    
    print("📄 Found pdf-version.html")
    print()
    
    # Try wkhtmltopdf first
    if check_wkhtmltopdf():
        print("✅ wkhtmltopdf found - attempting automatic PDF generation...")
        if generate_pdf_with_wkhtmltopdf():
            return
        else:
            print("⚠️  Automatic generation failed, falling back to browser method...")
            print()
    
    # Fall back to browser method
    print("🌐 Using browser method for PDF generation...")
    open_in_browser()

if __name__ == "__main__":
    main() 