from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = 'pages/home.html'

class AboutView(TemplateView):
    template_name = 'pages/about.html'

class RankingView(TemplateView):
    template_name = 'pages/ranking.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['ticker'] = self.kwargs['ticker']
        return context