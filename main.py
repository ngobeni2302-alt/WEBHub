from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app = FastAPI(title="WEBHub API")

# --- Mock Data ---

WORK_ITEMS = [
    {"cat": "websites", "title": "Project Website 01", "desc": "Placeholder — swap in a real project screenshot."},
    {"cat": "websites", "title": "Project Website 02", "desc": "Placeholder — swap in a real project screenshot."},
    {"cat": "apps", "title": "App Build 01", "desc": "Placeholder — swap in a real app screenshot."},
    {"cat": "apps", "title": "App Build 02", "desc": "Placeholder — swap in a real app screenshot."},
    {"cat": "design", "title": "Design Piece 01", "desc": "Placeholder — swap in real Canva/graphic work."},
    {"cat": "design", "title": "Design Piece 02", "desc": "Placeholder — swap in real Canva/graphic work."}
]

TEAM_MEMBERS = [
    {"id": 1, "name": "Team Member 1", "role": "Role / Title", "email": "name1@webhub.co.za"},
    {"id": 2, "name": "Team Member 2", "role": "Role / Title", "email": "name2@webhub.co.za"},
    {"id": 3, "name": "Team Member 3", "role": "Role / Title", "email": "name3@webhub.co.za"},
    {"id": 4, "name": "Team Member 4", "role": "Role / Title", "email": "name4@webhub.co.za"},
    {"id": 5, "name": "Team Member 5", "role": "Role / Title", "email": "name5@webhub.co.za"},
    {"id": 6, "name": "Team Member 6", "role": "Role / Title", "email": "name6@webhub.co.za"}
]

DEV_SKILLS = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "FastAPI"]
DESIGN_SKILLS = ["Canva", "Figma"]

# --- API Models ---

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

# --- API Endpoints ---

@app.get("/api/work")
async def get_work():
    return {"status": "success", "data": WORK_ITEMS}

@app.get("/api/team")
async def get_team():
    return {"status": "success", "data": TEAM_MEMBERS}

@app.get("/api/skills")
async def get_skills():
    return {
        "status": "success", 
        "data": {
            "dev": DEV_SKILLS,
            "design": DESIGN_SKILLS
        }
    }

@app.post("/api/contact")
async def submit_contact(msg: ContactMessage):
    # In a real application, you would send an email or save to a database here.
    print(f"\n--- NEW CONTACT SUBMISSION ---")
    print(f"From: {msg.name} <{msg.email}>")
    print(f"Message: {msg.message}")
    print(f"------------------------------\n")
    return {"status": "success", "message": "Message received! We will be in touch."}

# --- Static Files ---
# Serve frontend assets at root level
app.mount("/", StaticFiles(directory="static", html=True), name="static")
