from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about_me/')
def about_me():
    return render_template('about_me.html')

@app.route('/news/')
def news():
    return render_template('news.html')

if __name__ == (__name__):
    app.run(debug=True)