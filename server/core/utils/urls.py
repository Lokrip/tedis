def build_absolute_uri_to_media(request, media):
    try:
        return request.build_absolute_uri(media.url)
    except AttributeError:
        return request.build_absolute_uri(str(media))
