from django.views.generic import TemplateView, DetailView, ListView
from api.models import Ticker, Metadata

class RankingView(TemplateView):
    model = Metadata
    template_name = 'apps/ranking.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Get ticker symbol from url
        ticker_symbol = self.kwargs['ticker'] 
        # Query Ticker model based on ticker symbol
        ticker = Ticker.objects.get(ticker=ticker_symbol)
        # Query Metadata model based on Ticker foreign key
        # and pass returned data to template
        context['metadata'] = Metadata.objects.get(ticker=ticker)
        return context