import http.client
import os
import json
import re
import sys


def clean_from_comments(content):
    return re.sub("(\/\*{1,}[^\/]{0,}\*{1,}\/)", "", content)


def main():
    EXTERNALS_PATH = "./externals.jsonc"

    if os.path.isfile(EXTERNALS_PATH):
        with open(EXTERNALS_PATH, "r") as file:
            content = clean_from_comments(file.read())
            externals = json.loads(content)

            name = sys.argv[1]

            connection = http.client.HTTPConnection("94.250.250.29", 5050)

            headers = {
                "Content-Type": "application/json",
            }
            payload = {"name": name, "externals": externals, "env": "prod"}
            payload_json = json.dumps(payload)

            print(f"payload_json {payload_json}")

            connection.request(
                "POST", "/update-externals", body=payload_json, headers=headers
            )
            res = connection.getresponse()

            if res.status == 200:
                print(
                    f"External dependencies of microfrontend {name} were successfully updated"
                )
                exit(0)
            else:
                print(f"Error occurred! {res.read().decode('utf-8')}")
                exit(1)
    else:
        exit(0)


if __name__ == "__main__":
    main()
