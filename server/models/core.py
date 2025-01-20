from django.db import models

class PostTags(models.Model):
    name = models.CharField(max_length=120) 
    
        
    def __str__(self):
        return self.name
    
    
    class Meta:
        verbose_name = 'Post Tag'
        verbose_name_plural = 'Post Tags'
    