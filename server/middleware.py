from django.http import HttpResponse, HttpResponseNotFound

class FirstMiddleware:
    def __init__(self, get_response):
        self._get_response = get_response

    def __call__(self, request):
        print("Start FirstMiddleware")

        #можно переврать цепочку middleware
        # return HttpResponse("ok")
        response = self._get_response(request)
        print("End FirstMiddleware")
        print(response.status_code)
        return response;

    #он вызываеться когда у нашей view возникает любое не отловлинное исключение
    #тоесть если она возникала джанго у всех middleware вызовит process_exeption
    def process_exeption(self, request, exception):
        print(f"Exception is {exception}")
        return None

class SecondMiddleware:
    def __init__(self, get_response):
        self._get_response = get_response

    def __call__(self, request):
        print("Start SecondMiddleware")
        response = self._get_response(request)
        print("End SecondMiddleware")
        return response;
