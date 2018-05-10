function getData(){
	alert("hello");
	var xmlhttp= new XMLHttpRequest();
	var url= "http://localhost:3000/db";

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange= function(){
		if(this.readyState == 4 && this.status == 200)
		{
			var response=JSON.parse(this.responseText);
			var data=JSON.stringify(response);
			document.getElementById('correct_words_count').innerHTML="correct Word Count :"+response.spell[0].correct_words_count;
			document.getElementById('incorrect_words_count').innerHTML="incorrect words Count :"+response.spell[0].incorrect_words_count;
			document.getElementById('base_nouns_count').innerHTML="nouns count :"+response.pos[0].base_nouns_count;
			document.getElementById('base_verbs_count').innerHTML="verbs Count :"+response.pos[0].base_verbs_count;
			document.getElementById('base_adjectives_count').innerHTML="adjectives Count :"+response.pos[0].base_adjectives_count;
			document.getElementById('base_adverbs_count').innerHTML="adverbs Count :"+response.pos[0].base_adverbs_count;
			document.getElementById('tar_nouns_count').innerHTML="nouns Count :"+response.pos[0].tar_nouns_count;
			document.getElementById('tar_verbs_count').innerHTML="verbs Count :"+response.pos[0].tar_verbs_count;
			document.getElementById('tar_adjectives_count').innerHTML="adjectives Count :"+response.pos[0].tar_adjectives_count;
			document.getElementById('tar_adverbs_count').innerHTML="adverbs Count :"+response.pos[0].tar_adverbs_count;
			document.getElementById('percentage').innerHTML="percentages :"+response.eval[0].percentage;


		}
	}
}