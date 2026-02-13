from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__)
CORS(app)

# Connect MongoDB
client = MongoClient(os.getenv("MONGO_URI"))
db = client['port-folio']
about_collection = db['about']
projects_collection = db['projects']

@app.route('/api/about')
def about():
    data = about_collection.find_one({}, {'_id': 0})
    return jsonify(data)


@app.route('/api/projects')
def projects():
    data = list(projects_collection.find({}, {'_id': 0}))
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)