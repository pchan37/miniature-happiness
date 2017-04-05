from os import remove, system as SystemCall
from os.path import exists
from sys import argv

def main():
    genre_files = ['pop.txt', 'christian.txt', 'country.txt', 'dance.txt', 'hiphop.txt', 'holiday.txt',
                   'latin.txt', 'rock.txt']
    result = {}
    with open(argv[1]) as song_list:
        file_content = song_list.readlines()
        for line in file_content:
            line = line.strip()
            for genre_file in genre_files:
                if line in open(genre_file).read():
                    if genre_file[:-4] in result:
                        result[genre_file[:-4]] += 1
                    else:
                        result[genre_file[:-4]] = 1
    for genre, count in result.items():
        print genre, count
            
if __name__ == '__main__':
    main()
