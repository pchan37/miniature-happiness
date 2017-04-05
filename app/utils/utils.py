from flask import Blueprint, jsonify

utils = Blueprint('utils', __name__)

@utils.route('/data/<year>')
def get_data(year):
    with open('data/{0}.txt'.format(year)) as file_handler:
        file_content = file_handler.readlines()
    result = []
    for line in file_content:
        line = line.strip()
        genre, song_count = line.split(' ')
        print genre.__repr__(), song_count.__repr__()
        result.append({"genre": genre, "song_count": int(song_count)})
    print result
    return jsonify(result=result)

