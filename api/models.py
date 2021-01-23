from django.db import models

class Ticker(models.Model):
	ticker = models.CharField(max_length=6, unique=True)
	company_name_ticker = models.CharField(max_length=200)

	def __str__(self):
		return f'{self.id} {self.ticker}'

class Sector(models.Model):
	sector = models.CharField(max_length=100, unique=True)

	def __str__(self):
		return f'{self.id} {self.sector}'

class Industry(models.Model):
	industry = models.CharField(max_length=100, unique=True)

	def __str__(self):
		return f'{self.id} {self.industry}'

class MarketCapSize(models.Model):
	market_cap_size = models.CharField(max_length=100, unique=True)

	def __str__(self):
		return f'{self.id} {self.market_cap_size}'

class Metadata(models.Model):
	ticker = models.OneToOneField(Ticker, on_delete=models.CASCADE)
	sector = models.ForeignKey(Sector, on_delete=models.CASCADE)
	industry = models.ForeignKey(Industry, on_delete=models.CASCADE)
	market_cap_size = models.ForeignKey(MarketCapSize, on_delete=models.CASCADE)

	price = models.DecimalField(max_digits=8, decimal_places=2)
	volume = models.IntegerField() # max of +/- 2 billion with IntegerField
	avg_volume = models.IntegerField() 
	market_cap = models.BigIntegerField()
	beta = models.FloatField()
	company_name = models.CharField(max_length=200)
	earnings_date = models.DateField()
	
	last_updated = models.DateField() # timestamp of when data was last refreshed

	def __str__(self):
		return f'{self.ticker}'
	
class Metric(models.Model):
	ticker = models.OneToOneField(Ticker, on_delete=models.CASCADE)

	# final ranks
	composite_rank = models.IntegerField() 
	value_rank = models.IntegerField() 
	mom_rank = models.IntegerField() 
	quality_rank = models.IntegerField() 
	vol_rank = models.IntegerField() 
	profit_rank = models.IntegerField() 
	finance_rank  = models.IntegerField()  
	safety_rank = models.IntegerField() 

	# averages
	composite_avg = models.FloatField()
	value_avg = models.FloatField()
	mom_avg = models.FloatField()
	quality_avg = models.FloatField()
	vol_avg = models.FloatField()
	profit_avg = models.FloatField()
	finance_avg = models.FloatField()
	safety_avg = models.FloatField()

	# value 
	pe_value = models.FloatField()
	pe_sec_median = models.FloatField()
	pe_sec_rank = models.IntegerField()
	pe_ind_median = models.FloatField()
	pe_ind_rank = models.IntegerField()
	pb_value = models.FloatField()
	pb_sec_median = models.FloatField()
	pb_sec_rank = models.IntegerField()
	pb_ind_median = models.FloatField()
	pb_ind_rank = models.IntegerField()
	ps_value = models.FloatField()
	ps_sec_median = models.FloatField()
	ps_sec_rank = models.IntegerField()
	ps_ind_median = models.FloatField()
	ps_ind_rank = models.IntegerField()
	pcf_value = models.FloatField()
	pcf_sec_median = models.FloatField()
	pcf_sec_rank = models.IntegerField()
	pcf_ind_median = models.FloatField()
	pcf_ind_rank = models.IntegerField()
	eve_value = models.FloatField()
	eve_sec_median = models.FloatField()
	eve_sec_rank = models.IntegerField()
	eve_ind_median = models.FloatField()
	eve_ind_rank = models.IntegerField()

	# momentum
	mom_12_value = models.FloatField()
	mom_12_sec_median = models.FloatField()
	mom_12_sec_rank = models.IntegerField()
	mom_12_ind_median = models.FloatField()
	mom_12_ind_rank = models.IntegerField()
	mom_6_value = models.FloatField()
	mom_6_sec_median = models.FloatField()
	mom_6_sec_rank = models.IntegerField()
	mom_6_ind_median = models.FloatField()
	mom_6_ind_rank = models.IntegerField()

	# volatility
	vol_12_value = models.FloatField()
	vol_12_sec_median = models.FloatField()
	vol_12_sec_rank = models.IntegerField()
	vol_12_ind_median = models.FloatField()
	vol_12_ind_rank = models.IntegerField()
	beta_value = models.FloatField()
	beta_sec_median = models.FloatField()
	beta_sec_rank = models.IntegerField()
	beta_ind_median = models.FloatField()
	beta_ind_rank = models.IntegerField()

	# profit
	asset_turn_value = models.FloatField()
	asset_turn_sec_median = models.FloatField()
	asset_turn_sec_rank = models.IntegerField()
	asset_turn_ind_median = models.FloatField()
	asset_turn_ind_rank = models.IntegerField()
	gross_profit_value = models.FloatField()
	gross_profit_sec_median = models.FloatField()
	gross_profit_sec_rank = models.IntegerField()
	gross_profit_ind_median = models.FloatField()
	gross_profit_ind_rank = models.IntegerField()
	gross_margin_value = models.FloatField()
	gross_margin_sec_median = models.FloatField()
	gross_margin_sec_rank = models.IntegerField()
	gross_margin_ind_median = models.FloatField()
	gross_margin_ind_rank = models.IntegerField()
	return_asset_value = models.FloatField()
	return_asset_sec_median = models.FloatField()
	return_asset_sec_rank = models.IntegerField()
	return_asset_ind_median = models.FloatField()
	return_asset_ind_rank = models.IntegerField()

	# finance
	ext_fin_value = models.FloatField()
	ext_fin_sec_median = models.FloatField()
	ext_fin_sec_rank = models.IntegerField()
	ext_fin_ind_median = models.FloatField()
	ext_fin_ind_rank = models.IntegerField()
	cf_debt_value = models.FloatField()
	cf_debt_sec_median = models.FloatField()
	cf_debt_sec_rank = models.IntegerField()
	cf_debt_ind_median = models.FloatField()
	cf_debt_ind_rank = models.IntegerField()

	# safety
	accrual_value = models.FloatField()
	accrual_sec_median = models.FloatField()
	accrual_sec_rank = models.IntegerField()
	accrual_ind_median = models.FloatField()
	accrual_ind_rank = models.IntegerField()

	def __str__(self):
		return f'{self.ticker}'