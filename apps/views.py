from django.views.generic import TemplateView
from api.models import Ticker, Metadata

class RankingView(TemplateView):
    template_name = 'apps/ranking.html'