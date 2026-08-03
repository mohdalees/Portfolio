from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Allow React frontend to access Flask API
CORS(app)

# Connect to MongoDB
client = MongoClient(os.getenv("MONGO_URI"))

db = client["port-folio"]
about_collection = db["about"]
projects_collection = db["projects"]


@app.route("/")
def home():
    return jsonify({"message": "Portfolio API is running"})


@app.route("/api/about")
def about():
    data = about_collection.find_one({}, {"_id": 0})

    if data is None:
        return jsonify({"message": "About data not found"}), 404

    return jsonify(data)


@app.route("/api/projects")
def projects():
    data = list(projects_collection.find({}, {"_id": 0}))
    return jsonify(data)


if __name__ == "__main__":
    app.run()