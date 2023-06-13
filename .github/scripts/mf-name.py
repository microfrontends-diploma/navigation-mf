import os
import json


def main():
    with open("./package.json") as file:
        data = json.load(file)
        name = data.get("name")

        with open(os.environ["GITHUB_OUTPUT"], "a") as fh:
            print(f"mf-name={name}", file=fh)


if __name__ == "__main__":
    main()
