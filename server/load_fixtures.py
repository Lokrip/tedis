import os
import subprocess

from pathlib import Path


def get_dir_path():
    return Path(__file__).parent.parent


def get_current_dir():
    return Path(__file__).parent


def load_fixtures():
    current_dir = get_current_dir()
    fixtures_dir = current_dir / "fixtures"

    commands = []

    for file_name in fixtures_dir.iterdir():
        if file_name.is_file():
            commands.append(
                "python manage.py loaddata %s" % (
                    file_name
                )
            )
        else:
            raise ValueError("This not file")

    if commands:
        for cmd in commands:
            subprocess.run(cmd, shell=True)
        return True

    return None


def main():
    os.chdir(get_dir_path())
    if not load_fixtures():
        raise ValueError("Фикстуры не были загружены")


if __name__ == "__main__":
    main()
