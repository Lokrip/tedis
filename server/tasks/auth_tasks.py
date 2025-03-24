from server.celery import app
from server.mixins import AuthMixin

@app.task
def send_mail_to_auth(customer_id, uuid_code):
    from server.models import Customers
    mixin = AuthMixin(Customers)
    customer = mixin.findById(customer_id)
    return mixin.sendCodeForCustomer(user=customer, uuid_code=uuid_code)

