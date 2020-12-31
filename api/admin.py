from django.contrib import admin
from api.models import *

admin.site.register(Ticker)
admin.site.register(Sector)
admin.site.register(Industry)
admin.site.register(MarketCapSize)
admin.site.register(Metadata)
admin.site.register(Values)