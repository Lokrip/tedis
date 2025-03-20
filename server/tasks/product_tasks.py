from decimal import Decimal
from server.celery import app

@app.task()
def set_price_discount(product_id):
    from server.models import Product
    product = Product.objects.get(id=product_id)

    # Ensure prices and discount are Decimal instances
    discount_percentage = Decimal(product.discount)
    original_price = Decimal(product.price)

    # Calculate the discounted price
    new_price = original_price - (original_price * (discount_percentage / 100))

    # Update the price_discount field
    product.price_discount = new_price.quantize(Decimal('0.01'))
    product.save(save_modal=False)
