# This file contains our python endpoints. 

from flask import render_template, flash, Response, request
from app import app
import requests

# This endpoint serves our index.html file. It is found in templates
@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    return render_template('index.html', title='Home', user=user)

# this endpoint does a get request to google.com and returns the result (html file)
@app.route('/test', methods=['GET'])
def test():
  print 'tests called'
  return requests.get('https://www.google.com').content

# the frontend makes a post request to this endpoint with email and password
# this endpoint calls makes a get to http://echo.jsontest.com/ 
# it adds on email/{email from frontend}/password/{password from frontend}
@app.route('/example', methods=['POST'])
def example():
  base = 'http://echo.jsontest.com/'
  data = request.form
  email = data['email1']
  password =  data['password1']
  return requests.get(base + 'email/' + str(email) + '/password/' + str(password)).content
