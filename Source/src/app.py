from flask import Flask, jsonify, request, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from models import db, User

app = Flask(__name__)

app.config['SECRET_KEY'] = 'famlkn1nof20hfsaj109hg0islxc'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///bloxdb.db'
