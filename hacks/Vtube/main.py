from tkinter import *
from tkinter import simpledialog, Checkbutton, IntVar
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import cv2
import threading
import imageio
from PIL import Image, ImageTk
import os
import random
import requests
EscapePressed = False

def download_media_from_github(repo_url, subfolder, destination_folder):
    try:
        github_api_url = f"{repo_url.rstrip('/')}/{subfolder}"
        response = requests.get(github_api_url)
        response.raise_for_status()

        api_data = response.json()

        if 'payload' in api_data and 'tree' in api_data['payload']:
            items = api_data['payload']['tree']['items']

            for item in items:
                print(item)
                if 'contentType' in item and item['contentType'] == 'file':
                    download_url = repo_url + "/" + item['path']  
                    media_path = os.path.join(destination_folder, item['name'])

                    response = requests.get(download_url)
                    response.raise_for_status()

                    with open(media_path, 'wb') as f:
                        f.write(response.content)

        else:
            update_log(f"Invalid response structure from GitHub API: {api_data}", True)

    except Exception as e:
        update_log(f"Error downloading media from GitHub: {e}", True)

def play_random_media(local_media_folder):
    all_files = [f for f in os.listdir(local_media_folder)]

    video_files = [f for f in all_files if f.endswith(('.mp4', '.avi', '.mkv', '.mov'))]
    image_files = [f for f in all_files if f.endswith(('.jpg', '.jpeg', '.png', '.gif'))]

    if not video_files and not image_files:
        update_log("No video or image files found in the specified folder.", True)
        return
    if not image_files:
        update_log("No image files found in the specified folder.", True)
        return
    if video_files:
        media_type = random.choice(['video', 'image'])
    else:
        media_type = 'image'

    if media_type == 'video':
        selected_media = random.choice(video_files)
        media_path = os.path.join(local_media_folder, selected_media)

        cap = cv2.VideoCapture(media_path)

    elif media_type == 'image':
        selected_media = random.choice(image_files)
        media_path = os.path.join(local_media_folder, selected_media)
        try:
            with open(media_path, 'rb') as f:
                img = Image.open("Videos/1Sponsor.jpg")
                img = ImageTk.PhotoImage(image=img)

                for widget in root.winfo_children():
                    widget.grid_forget()

                image_window = Toplevel(root)
                image_window.title("Random Image Viewer")
                image_window.attributes('-fullscreen', True)
                image_window.attributes('-topmost', True)
                image_window.geometry(f"{root.winfo_screenwidth()}x{root.winfo_screenheight()}+0+0")

                image_label = Label(image_window, image=img)
                image_label.pack(fill=BOTH, expand=YES)

                image_window.bind('q', lambda event: image_window.destroy())
                image_window.mainloop()

        except Exception as e:
            update_log(f"Error opening image file: {e}", True)


    for widget in root.winfo_children():
        widget.grid_forget()

    video_window = Toplevel(root)
    video_window.title("Random Video Player")
    video_window.attributes('-fullscreen', True)
    video_window.attributes('-topmost', True)
    video_window.geometry(f"{root.winfo_screenwidth()}x{root.winfo_screenheight()}+0+0")

    def update_media():
        ret, frame = cap.read()
        if ret:
            img = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            img = Image.fromarray(img)
            img = ImageTk.PhotoImage(image=img)

            video_label.config(image=img)
            video_label.image = img
            video_window.update()
            video_window.after(30, update_media)  
        else:
            video_window.destroy()

    video_label = Label(video_window)
    video_label.pack(fill=BOTH, expand=YES)
    update_media()


    video_window.bind('q', lambda event: video_window.destroy())


    video_window.mainloop()

def toggle_proxy_list():
    if checkbox_var.get() == 1:
        text.grid(row=6, column=0, columnspan=3, padx=5, pady=5)
    else:
        text.grid_forget()
        

def get_proxies():
    lines = text.get("1.0", END).split("\n")[:-1]
    return lines

def play_intro_video():
    intro_video_path = 'Intro.mp4'  

    cap = cv2.VideoCapture(intro_video_path)


    for widget in root.winfo_children():
        widget.grid_forget()

    video_window = Toplevel(root)
    video_window.title("Fullscreen Video")
    video_window.attributes('-fullscreen', True)
    video_window.attributes('-topmost', True)  
    video_window.geometry(f"{root.winfo_screenwidth()}x{root.winfo_screenheight()}+0+0")

    def update_video():
        ret, frame = cap.read()
        if ret:
            img = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            img = Image.fromarray(img)
            img = ImageTk.PhotoImage(image=img)

            video_label.config(image=img)
            video_label.image = img
            video_window.update()
            video_window.after(1, update_video)  
        else:
            
            video_label.destroy()
            video_window.destroy()

            
            for widget in root.winfo_children():
                try:
                    widget.grid()
                except:
                    widget.pack()
                finally:
                    pass

            
            root.deiconify()
    video_label = Label(video_window)
    video_label.pack(fill=BOTH, expand=YES)
    update_video()

    
    video_window.mainloop()

def video_thread():
    root.after(0, play_intro_video)
def update_total_views():
    views_var.set(f'{views_var.get()}')


def update_log(txt, excption):
    if excption:
        console_text.insert(END, "\n" + str(txt), "error_text")
    else:
        console_text.insert(END, "\n" + str(txt), "normal_text")


def get_user_input(txt):
    user_input = simpledialog.askstring("Input", txt)
    return user_input


def on_escape(event):
    global EscapePressed
    EscapePressed = True


def Run_Bot(BreakRate, PROGRAMS, PROGRAM_NAMES):
    global EscapePressed
    r2 = 2
    r2 += 1
    time.sleep(int(BreakRate))
    for j in range(PROGRAMS):
        log_text = f"Bot {r2} has started in program {j+1}"
        update_log(log_text, False)
        driver[j].refresh()
        action = ActionChains(driver[j])
        action.send_keys(Keys.SPACE)
        log_text = f"Bot {r2} is watching video in program program{j+1}"
        update_log(log_text, False)
        action.perform()
        log_text = f"Bot {r2} has finished watching video in program number #{j+1}"
        update_log(log_text, False)
        views_var.set(views_var.get() + 1)
        update_total_views()
        if EscapePressed:
            driver.quit()
    if not EscapePressed:
        root.after(100, Run_Bot, BreakRate, PROGRAMS, PROGRAM_NAMES)


def run_program():
    
    global EscapePressed
    EscapePressed = False
    Error_label.config(text="")
    global driver  
    driver = []  
    PROGRAM_NAMES = []
    r = 1
    github_repo_url = 'https://github.com/OnHellOfficial/Showcase/tree/main/'
    subfolder = 'assets/Sponsors'
    local_media_folder = 'Videos'

    download_media_from_github(github_repo_url, subfolder, local_media_folder)
    play_random_media(local_media_folder)

    try:
        URL = URL_entry.get()
        BreakRate = duration_entry.get()
        PROGRAMS = Directory_entry.get()

        if BreakRate == "" or URL == "" or PROGRAMS == "" or PROGRAMS == "0" or BreakRate == "0":
            Error_label.config(text="Must input values or must not put 0 in webdrivers or in video duration.")
        else:
            URL = str(URL_entry.get())
            BreakRate = int(duration_entry.get())
            PROGRAMS = int(Directory_entry.get())

            proxies = []  

            
            if checkbox_var.get() == 1:
                proxies = get_proxies()

            for i in range(int(PROGRAMS)):
                proxy_address = proxies[i] if i < len(proxies) else ''
                driver.append(webdriver.Chrome(service=Service(), options=webdriver.ChromeOptions().add_argument(f'--proxy-server={proxy_address}')))
                log_text = f"Bot {r} has started in program number #{i+1} with proxy: {proxy_address}"
                update_log(log_text, False)
                driver[i].get(URL)
                CookieBtn = driver[i].find_element(By.CSS_SELECTOR, '.yt-spec-touch-feedback-shape.yt-spec-touch-feedback-shape--touch-response-inverse')
                CookieBtn.click()

                action = ActionChains(driver[i])
                action.send_keys(Keys.SPACE)
                action.perform()
                log_text = f"Bot {r} is watching video in program #{i+1}"
                update_log(log_text, False)

            print("running")
            Run_Bot(BreakRate, PROGRAMS, PROGRAM_NAMES)
            

    except Exception as e:
        if str(e) == "'str' object has no attribute 'capabilities'":
            update_log("WebDriver not found, input correct path with :C/ included", True)
        elif "Message: invalid argument" in str(e):
            update_log("Invalid url", True)
        elif ValueError:
            Error_label.config(text="Tips: Please enter correct number for webdrivers and for duration in seconds (not 0)\n Error:" + str(e))
        else:
            update_log(e, True)


root = Tk()
root.title("OnHell Vtube bot")

canvas = Canvas(root, bg="#222", highlightthickness=0)
canvas.pack(fill=BOTH, expand=YES)

input_frame = Frame(canvas, bg="#333")
input_frame.pack(side=TOP, pady=10, padx=10, fill=BOTH, expand=YES)

duration_label = Label(
    input_frame, text="Duration of video (sec): ", font=("Courier New", 12), bg="#333", fg="white"
)
duration_label.grid(row=0, column=0, padx=5, pady=5)
duration_entry = Entry(input_frame, font=("Courier New", 12))
duration_entry.grid(row=0, column=1, padx=5, pady=5)

URL_label = Label(input_frame, text="URL: ", font=("Courier New", 12), bg="#333", fg="white")
URL_label.grid(row=1, column=0, padx=5, pady=5)
URL_entry = Entry(input_frame, font=("Courier New", 12))
URL_entry.grid(row=1, column=1, padx=5, pady=5)

Directory_label = Label(
    input_frame, text="Number of webdrivers: ", font=("Courier New", 12), bg="#333", fg="white"
)
Directory_label.grid(row=2, column=0, padx=5, pady=5)
Directory_entry = Entry(input_frame, font=("Courier New", 12))
Directory_entry.grid(row=2, column=1, padx=5, pady=5)

checkbox_var = IntVar()
checkbox = Checkbutton(input_frame, text="Use proxy servers", variable=checkbox_var, bg="#333",command=toggle_proxy_list)
checkbox.grid(row=3, columnspan=2, pady=10)

submit_button = Button(
    input_frame,
    text="Submit",
    command=run_program,
    font=("Courier New", 10),
    padx=10,
    pady=5,
    fg="white",
    relief=FLAT,
)
submit_button.grid(row=4, columnspan=2, pady=10)
submit_button.configure(bg="#45a049", activebackground="#4CAF50")

text = Text(
    input_frame, selectbackground="lightblue", wrap=WORD, height=10, width=40
)
text.grid(row=6, column=0, columnspan=3, padx=5, pady=5)

Error_label = Label(
    input_frame, text="", font=("Courier New", 12), bg="#333", fg="red"
)
Error_label.grid(row=5, column=0, padx=5, pady=5)

console_frame = Frame(root, bg="#333")
console_frame.pack(side=LEFT, padx=10, fill=BOTH, expand=YES)

console_label = Label(console_frame, text="Console", font=('Courier New', 14), bg="#333", fg="white")
console_label.grid(row=0, column=0, sticky=W)

console_text = Text(console_frame, height=10, width=30, font=('Courier New', 12), bg="#333", fg="white")
console_text.grid(row=1, column=0, sticky=W)

console_scrollbar = Scrollbar(console_frame, command=console_text.yview)
console_scrollbar.grid(row=1, column=1, sticky=N+S)  

console_text.config(yscrollcommand=console_scrollbar.set)
video_label = Label(root)
video_label.pack()
total_views_label = Label(
    root, text="Total Views", font=("Courier New", 14), bg="#333", fg="white"
)
total_views_label.pack(side=TOP, padx=10)

views_var = IntVar()
views_var.set(0)
total_views = Label(
    root, textvariable=views_var, font=("Courier New", 12), bg="#333", fg="white"
)
total_views.pack(side=TOP, padx=10)

text.grid_forget()
ip_addresses = [
    "201.234.235.29",
    "64.189.106.6",
    "185.229.111.129",
    "103.156.219.18",
    "83.243.92.154",
    "63.250.52.82",
    "91.148.126.189",
    "195.181.172.211",
    "52.87.206.29",
    "117.160.250.163",
    "138.121.161.82",
    "91.241.217.58",
    "188.132.183.143",
    "45.65.137.218",
    "47.98.46.112",
    "167.172.238.6",
    "47.89.240.232",
    "3.12.144.146",
    "80.249.112.162",
    "195.158.16.9",
    "178.54.21.203",
    "159.203.13.121",
    "104.143.10.182",
    "111.20.217.178",
    "34.84.124.14",
    "119.18.149.34",
    "58.20.21.234",
    "190.97.238.90",
    "79.110.201.235",
    "58.20.248.139",
    "3.90.100.12",
    "182.253.109.188",
    "51.210.183.2",
    "160.20.22.116",
    "158.69.7.48"
]

for line in ip_addresses:
    text.insert(END, line + "\n")

root.bind("<Escape>", on_escape)
intro_thread = threading.Thread(target=video_thread)
intro_thread.start()
root.mainloop()

"""
driver = webdriver.Chrome(service=Service())
driver.get("https://www.youtube.com")
CookieBtn = driver.find_element(By.CSS_SELECTOR, '.yt-spec-touch-feedback-shape.yt-spec-touch-feedback-shape--touch-response-inverse')
CookieBtn.click()"""
