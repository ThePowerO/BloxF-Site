from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from models import db, User

app = Flask(__name__)

app.config['SECRET_KEY'] = 'famlkn1nof20hfsaj109hg0islxc'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bloxdb.db'

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/')
def Main_Page():
    return "<p>Test</p>"

@app.route('/CreateAccount', methods=["POST"])
def CreateAccount():

    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({'error': 'User already exists'}), 409
