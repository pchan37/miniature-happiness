from os import remove, system as SystemCall
from os.path import exists
from sys import argv

def main():
    with open(argv[1]) as song_list:
        file_content = song_list.readlines()
        for line in file_content:
            line = line.strip()
            if exists('pop.txt'):
                SystemCall('cat pop.txt | grep -o "{0}" | wc -l >> pop_count.txt'.format(line))
            if exists('christian.txt'):
                SystemCall('cat christian.txt | grep -o "{0}" | wc -l >> christian_count.txt'.format(line))
            if exists('country.txt'):
                SystemCall('cat country.txt | grep -o "{0}" | wc -l >> country_count.txt'.format(line))
            if exists('dance.txt'):
                SystemCall('cat dance.txt | grep -o "{0}" | wc -l >> dance_count.txt'.format(line))
            if exists('hiphop.txt'):
                SystemCall('cat hiphop.txt | grep -o "{0}" | wc -l >> hiphop_count.txt'.format(line))
            if exists('holiday.txt'):
                SystemCall('cat holiday.txt | grep -o "{0}" | wc -l >> holiday_count.txt'.format(line))
            if exists('latin.txt'):
                SystemCall('cat latin.txt | grep -o "{0}" | wc -l >> latin_count.txt'.format(line))
            if exists('rock.txt'):
                SystemCall('cat rock.txt | grep -o "{0}" | wc -l >> rock_count.txt'.format(line))
    for song_genre in ['pop', 'christian', 'dance', 'hiphop', 'holiday', 'latin', 'rock']:
        if exists(song_genre + '_count.txt'):
            with open(song_genre + '_count.txt') as song_genre_file_handler:
                file_content = song_genre_file_handler.readlines()
                file_content = map(int, file_content)
                print song_genre_file_handler
                print sum(file_content)
            remove(song_genre + '_count.txt')
            
if __name__ == '__main__':
    main()
