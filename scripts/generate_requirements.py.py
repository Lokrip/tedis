import toml

from pathlib import Path


def extract_dependencies(pyproject_file, output_file):
    script_dir = Path(__file__).parent.parent

    pyproject_path = script_dir / pyproject_file
    output_path = script_dir / output_file


    with open(pyproject_path, 'r') as f:
        pyproject_data = toml.load(f)

    dependencies = []

    if 'tool' in pyproject_data and 'poetry' in pyproject_data['tool']:
        poetry_data = pyproject_data['tool']['poetry']
        if 'dependencies' in poetry_data:
            for dep, version in poetry_data['dependencies'].items():

                if dep != 'python':
                    dependencies.append(f"{dep}=={str(version).replace('^', "")}")

    # Запись зависимостей в requirements.txt
    with open(output_path, 'w') as f:
        for dep in dependencies:
            f.write(dep + '\n')

extract_dependencies(
    'pyproject.toml',
    'docker/dev.txt'
)

extract_dependencies(
    'pyproject.toml',
    'docker/prod.txt'
)
