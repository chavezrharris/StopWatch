import time

def get_current_time():
    current_time = time.localtime()
    formatted_time = time.strftime("%H:%M:%S", current_time)
    return formatted_time

while True:
    clock_string = get_current_time()
    print(clock_string)
    time.sleep(1)
    import time

    def get_clock_string():
        current_time = time.localtime()
        hours, minutes, seconds = current_time.tm_hour, current_time.tm_min, current_time.tm_sec
        clock_rows = [
            "###   ###   ###   ###   ###   ###   ###",
            "# #   # #                           # #",
            "# #   # #   #   #   #   #   #   #   # #",
            "# #   # #                           # #",
            "###   ###   ###   ###   ###   ###   ###",
        ]
        for i in range(5):
            row = clock_rows[i]
            if i == 0 or i == 4:
                if hours < 10:
                    row = row[:4] + " " + row[5:]
                row = row[:8] + str(hours // 10) + row[9:]
                row = row[:12] + str(hours % 10) + row[13:]
            elif i == 1 or i == 3:
                if minutes < 10:
                    row = row[:4] + " " + row[5:]
                row = row[:20] + str(minutes // 10) + row[21:]
                row = row[:24] + str(minutes % 10) + row[25:]
            elif i == 2:
                if seconds < 10:
                    row = row[:4] + " " + row[5:]
                row = row[:32] + str(seconds // 10) + row[33:]
                row = row[:36] + str(seconds % 10) + row[37:]
            clock_rows[i] = row
        return "\n".join(clock_rows)

    while True:
        clock_string = get_clock_string()
        print(clock_string)
        time.sleep(1)
