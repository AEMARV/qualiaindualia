# PDF Portfolio Generation Instructions

## Overview
This guide explains how to generate a PDF version of your Artist-in-Action application portfolio. The PDF version displays all paintings in full size for optimal committee review.

## Files Created
- `pdf-version.html` - PDF-optimized version of your portfolio
- `generate-pdf.py` - Automated PDF generation script
- `PDF_INSTRUCTIONS.md` - This instruction file

## Method 1: Automated PDF Generation (Recommended)

### Prerequisites
Install wkhtmltopdf (optional but recommended for best results):

**Ubuntu/Debian:**
```bash
sudo apt-get install wkhtmltopdf
```

**macOS:**
```bash
brew install wkhtmltopdf
```

**Windows:**
Download from: https://wkhtmltopdf.org/downloads.html

### Generate PDF
1. Navigate to the portfolio directory:
   ```bash
   cd qualia_dualia_portfolio
   ```

2. Run the PDF generation script:
   ```bash
   python3 generate-pdf.py
   ```

3. The script will:
   - Check if wkhtmltopdf is available
   - Generate `Amir_Marvasti_Artist_Application.pdf` automatically
   - Or open the browser for manual generation if wkhtmltopdf is not available

## Method 2: Manual Browser Generation

If you prefer manual control or don't have wkhtmltopdf:

1. Open `pdf-version.html` in your web browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac) to open print dialog
3. Configure print settings:
   - **Destination**: Save as PDF
   - **Page Size**: A4
   - **Margins**: Minimum or Custom (0.5 inches)
   - **Background Graphics**: Enable ✓
   - **Scale**: 100%
4. Click "Save" and choose filename: `Amir_Marvasti_Artist_Application.pdf`

## PDF Features

### Optimized Layout
- Full-size painting displays (no thumbnails)
- Professional typography with gold/silver color scheme
- Proper page breaks between sections
- Print-optimized styling

### Content Included
- Complete artist statement and biography
- All 9 paintings with full-size images
- Accompanying poetry for each painting
- Atelier workspace photos
- Detailed residency objectives
- Equipment and materials list
- Contact information

### Print Quality
- High-resolution image display
- Clean, professional layout
- Proper spacing and typography
- Committee-friendly format

## File Structure
```
qualia_dualia_portfolio/
├── pdf-version.html          # PDF-optimized HTML
├── generate-pdf.py           # PDF generation script
├── PDF_INSTRUCTIONS.md       # This file
├── paintings/                # Painting images
├── Atellier/                # Atelier photos
└── ... (other portfolio files)
```

## Troubleshooting

### Images Not Loading
- Ensure all image files are in the correct folders
- Check file permissions
- Use absolute paths if needed

### PDF Generation Fails
- Try the browser method instead
- Check if wkhtmltopdf is properly installed
- Verify file paths and permissions

### Print Quality Issues
- Enable "Background graphics" in print settings
- Use A4 page size
- Set margins to minimum
- Ensure high-resolution images are used

## Final Steps

1. **Review the PDF**: Open the generated PDF and verify:
   - All paintings display correctly
   - Text is readable
   - Layout looks professional
   - Page breaks are appropriate

2. **File Size**: The PDF should be reasonable in size (typically 5-20MB depending on image quality)

3. **Submit**: Use the generated PDF for your Artist-in-Action application submission

## Notes
- The PDF version maintains the elegant gold/silver color scheme
- All paintings are displayed at full resolution for committee review
- Poetry is included with each painting for complete artistic context
- The layout is optimized for professional presentation
- Page breaks are controlled to avoid awkward content splitting

For any issues or questions, refer to the main portfolio documentation or contact the developer. 