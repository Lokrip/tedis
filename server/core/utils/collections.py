def deep_update(base_dict, update_with):
    """
    Recursively updates the `base_dict` with values from `update_with`.

    If a key in `update_with` corresponds to a dictionary and the same key
    exists in `base_dict` with a dictionary value, the function updates
    the nested dictionary recursively. Otherwise, it replaces the value
    in `base_dict` with the one from `update_with`.

    """
    for key, value in update_with.items():
        if isinstance(value, dict):
            base_dict_value = base_dict.get(key)
            if isinstance(base_dict_value, dict):
                # Recursively update nested dictionaries
                deep_update(base_dict_value, value)
            else:
                # Replace non-dictionary values
                base_dict[key] = value
        else:
            # Update or add new key-value pairs
            base_dict[key] = value
    return base_dict



