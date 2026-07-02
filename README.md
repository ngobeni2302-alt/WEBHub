# WEBHub
A ValambyaT3ch Production

## How to Run

This project uses a **FastAPI backend**. To run the project locally, you need to install the Python dependencies and start the Uvicorn server:

1. **Install dependencies:**
```bash
pip install -r requirements.txt
```

2. **Start the server:**
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

*Note: If you get an "Address already in use" error, try a different port, for example:*
```bash
uvicorn main:app --host 0.0.0.0 --port 8080 --reload
```

Then, open your web browser and navigate to `http://localhost:8000` (or the port you specified).

### Mobile Testing

If you want to view the site on your phone while the server is running, simply scan this QR code (ensure your phone is on the same Wi-Fi network):

![Mobile Testing QR Code](qrcode.png)
