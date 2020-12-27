from django import template
from django.template.defaultfilters import stringfilter
from django.utils.safestring import mark_safe
import markdown as md

register = template.Library()
@register.filter(is_safe=False)
@stringfilter

def markdown(value):
    return mark_safe(md.markdown(
        value,
        # codehilite adds classes to code; 3 fenced_code allows you to use ``` instead of #! with indent
        extensions = ['markdown.extensions.codehilite', 'markdown.extensions.fenced_code', ],
        safe_mode=False,
        enable_attributes=False))