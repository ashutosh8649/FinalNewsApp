var fs= require('fs');
var natural= require('natural');
var textract=require('textract');
var tar_noun,base_noun;
var tar_verb,base_verb;
var tar_adjective,base_adjective;
var tar_adverb,base_adverb;
var tar_rest, base_rest;
var base_wc,tar_wc;
var correct=0; var incorrect=0;
var correct_arr=[]; var incorrect_arr=[];
var noun_match=0; var verb_match=0; var adjective_match=0; var adverb_match=0;
var pos_base={}; var pos_tar={};
var noun_match_arr=[];var verb_match_arr=[];var adjective_match_arr=[];var adverb_match_arr=[];
var percentage=0;
var base_nouns_count=0;var base_verbs_count=0;var base_adjectives_count=0;var base_adverbs_count=0;
var tar_nouns_count=0;var tar_verbs_count=0;var tar_adjectives_count=0;var tar_adverbs_count=0;
var key_match_count=0;

// TOKENISING & converting words to lowercase for BASE & TARGET Document
var base_text = fs.readFileSync('base_document.txt', 'utf8').toLowerCase();
console.log ("\nbase document is: "+base_text);
var tokenizer = new natural.WordTokenizer();
var base_doc_arr= tokenizer.tokenize(base_text);
base_wc=base_doc_arr.length;
console.log("\nlength of base document is: "+base_wc);


var tar_text = fs.readFileSync('tar_document.txt', 'utf8').toLowerCase();
console.log ("\ntarget document is: "+tar_text);
var tokenizer = new natural.WordTokenizer();
var tar_doc_arr= tokenizer.tokenize(tar_text);
tar_wc=base_doc_arr.length;
console.log("\nlength of target document is: "+tar_wc);


// SPELLCHECK Module: No of correct words in target doc
var dict= fs.readFileSync('dictionary.txt', 'utf8');
var dict_arr= tokenizer.tokenize(dict);
var spellcheck=new natural.Spellcheck(dict_arr);
for (var i = 0; i < tar_wc; i++) {
	if(!spellcheck.isCorrect(base_doc_arr[i]))
	{
		incorrect++;
		incorrect_arr.push(correct_arr[i]);
	}
	else{
		correct++;
		correct_arr.push(incorrect_arr[i]);
	}
}
console.log("\nnumber of correct words:"+correct);
console.log("number of incorrect words:"+incorrect);

var natural = require("natural");
var path = require("path");
 
var base_folder = path.join(path.dirname(require.resolve("natural")), "brill_pos_tagger");
var rulesFilename = base_folder + "/data/English/tr_from_posjs.txt";
var lexiconFilename = base_folder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';
 
var lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
var rules = new natural.RuleSet(rulesFilename);
var tagger = new natural.BrillPOSTagger(lexicon, rules);
var tagged__arr=tagger.tag(base_doc_arr);

for(var i=0;i<base_doc_arr.length;i++)
{
	
	if(tagged__arr[i][1]=="NN"||tagged__arr[i][1]=="NNPS"||tagged__arr[i][1]=="NNS"||tagged__arr[i][1]=="NNp")
		base_nouns_count++;
	if(tagged__arr[i][1]=="VBG"||tagged__arr[i][1]=="VBZ"||tagged__arr[i][1]=="VB"||tagged__arr[i][1]=="VBD"||tagged__arr[i][1]=="VBP"||tagged__arr[i][1]=="VBN")
		base_verbs_count++;
	if(tagged__arr[i][1]=="JJ"||tagged__arr[i][1]=="JJS"||tagged__arr[i][1]=="JJS")
		base_adjectives_count++;
	if(tagged__arr[i][1]=="RR"||tagged__arr[i][1]=="RBR"||tagged__arr[i][1]=="RBS")
		base_adverbs_count++;

}
console.log(base_adjectives_count);

var natural = require("natural");
var path = require("path");
 
var base_folder = path.join(path.dirname(require.resolve("natural")), "brill_pos_tagger");
var rulesFilename = base_folder + "/data/English/tr_from_posjs.txt";
var lexiconFilename = base_folder + "/data/English/lexicon_from_posjs.json";
var defaultCategory = 'N';
 
var lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
var rules = new natural.RuleSet(rulesFilename);
var tagger = new natural.BrillPOSTagger(lexicon, rules);
var tagged__arr=tagger.tag(tar_doc_arr);

for(var i=0;i<tar_doc_arr.length;i++)
{
	
	if(tagged__arr[i][1]=="NN"||tagged__arr[i][1]=="NNPS"||tagged__arr[i][1]=="NNS"||tagged__arr[i][1]=="NNp")
		tar_nouns_count++;
	if(tagged__arr[i][1]=="VBG"||tagged__arr[i][1]=="VBZ"||tagged__arr[i][1]=="VB"||tagged__arr[i][1]=="VBD"||tagged__arr[i][1]=="VBP"||tagged__arr[i][1]=="VBN")
		tar_verbs_count++;
	if(tagged__arr[i][1]=="JJ"||tagged__arr[i][1]=="JJS"||tagged__arr[i][1]=="JJS")
		tar_adjectives_count++;
	if(tagged__arr[i][1]=="RR"||tagged__arr[i][1]=="RBR"||tagged__arr[i][1]=="RBS")
		tar_adverbs_count++;
	
}
console.log(tar_adjectives_count);

sw = require('stopword')
var oldString = base_text.split(' ')
var newString = sw.removeStopwords(oldString)
console.log(newString[2])

for(var i=0;i<newString.length;i++)
{
	console.log("newString :"+newString[i]+" tar_doc_arr :"+tar_doc_arr[i])

	for(var j=0;j<tar_doc_arr.length;j++)
	{
		if(newString[i]===tar_doc_arr[j])
			key_match_count++;
	}
}
console.log("no of key matched "+key_match_count)

percentage=(key_match_count*100)/(newString.length);
console.log("percentage :"+percentage)

    let evaluation={
    				
 					spell:[{"correct_words_count": correct,
 					 		"incorrect_words_count": incorrect}],
 					pos:[{
 						"base_nouns_count":base_nouns_count,
 					 	 "base_verbs_count":base_verbs_count,
 					 	 "base_adjectives_count":base_adjectives_count,
 					 	 "base_adverbs_count":base_adverbs_count,
 						"tar_nouns_count":tar_nouns_count,
 					 	 "tar_verbs_count":tar_verbs_count,
 					 	 "tar_adjectives_count":tar_adjectives_count,
 					 	 "tar_adverbs_count":tar_adverbs_count
 					 	}],	 
 					eval:[{"percentage":percentage}]
 					
 					}

let json= JSON.stringify(evaluation,null,2);
console.log(json);

fs.writeFile('data.json', json, 'utf8', (err)=>{
	if(err){
		console.log("Error");
		return;
	}
	else
	console.log("success!");
})


	

