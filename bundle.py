import sys

try:
    with open('index.html', 'r') as f:
        html = f.read()
    with open('css/styles.css', 'r') as f:
        styles = f.read()
    with open('css/dashboard.css', 'r') as f:
        dash = f.read()
    with open('js/app.js', 'r') as f:
        app = f.read()

    html = html.replace('<link rel="stylesheet" href="./css/styles.css">', f"<style>\n{styles}\n</style>")
    html = html.replace('<link rel="stylesheet" href="./css/dashboard.css">', f"<style>\n{dash}\n</style>")
    html = html.replace('<script src="./js/app.js"></script>', f"<script>\n{app}\n</script>")
    html = html.replace('<script type="module" src="./js/app.js"></script>', f"<script>\n{app}\n</script>")

    with open('trico-app.html', 'w') as f:
        f.write(html)
    print("Successfully created standalone trico-app.html")
except Exception as e:
    print(f"Error: {e}")
