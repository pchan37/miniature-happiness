from flask import Flask, render_template

from utils.utils import utils

app = Flask(__name__)
app.register_blueprint(utils)

@app.route('/')
def home():
    return render_template('index.html')

def main():
    app.debug = True
    app.run()

if __name__ == '__main__':
    main()
