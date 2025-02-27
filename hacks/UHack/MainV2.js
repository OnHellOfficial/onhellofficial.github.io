function openLink() {
            let url = document.getElementById('linkInput').value;
            let holder_url = document.getElementById("HolderlinkInput").value;
            if (url) {
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'https://' + url;
                 
                }
                if (holder_url) {
                var x = window.open(holder_url, '_blank');
                x.document.write("<iframe src='"+ url + "' style='height: 100%; width: 100%;'>")
				} else {
                document.write("<iframe src='"+ url + "' style='height: 100%; width: 100%;'>")
                }
            } else {
                alert('Please enter a valid URL');
            }
        }
