import yaml 

def yaml_coerce(value):
    #переобразует value в словарь python

    if isinstance(value, str):
        #yaml.load принимает строку YAML и преобразует её в словарь Python.
        #yaml.SafeLoader это loader для компиляций yaml файлов в python словарь
        return yaml.load(f"dummy: {value}", Loader=yaml.SafeLoader)["dummy"]

    return value
