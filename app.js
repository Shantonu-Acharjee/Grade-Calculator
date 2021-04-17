বাংলা_সাহিত্য = parseFloat(prompt('Enter your Marks on বাংলা সাহিত্য : '));

বাংলা_ভাষার_ব্যাকরণ = parseFloat(prompt('Enter your Marks on বাংলা ভাষার ব্যাকরণ : '));
//English_for_Toady = parseFloat(prompt('Enter your Marks on English for Toady : '));
//Enlish_Grammer_and_Composition = parseFloat(prompt('Enter your Marks on Enlish Grammer and Composition : '));
//গণিত = parseFloat(prompt('Enter your Marks : on গণিত '));
//চারু_ও_কারুকলা = parseFloat(prompt('Enter your Marks : on চারু ও কারুকলা '));
//তথ্য_ও_যোগাযোগ_প্রযুক্তি = parseFloat(prompt('Enter your Marks : on তথ্য ও যোগাযোগ প্রযুক্তি '));
//ক্যারিয়ার_এডুকেশন = parseFloat(prompt('Enter your Marks : on ক্যারিয়ার এডুকেশন '));
//পদার্থবিজ্ঞান = parseFloat(prompt('Enter your Marks : on পদার্থবিজ্ঞান '));
//রসায়ন = parseFloat(prompt('Enter your Marks : on রসায়ন '));
//জীববিজ্ঞান = parseFloat(prompt('Enter your Marks : on জীববিজ্ঞান '));
//কৃষিশিক্ষা = parseFloat(prompt('Enter your Marks : on কৃষিশিক্ষা '));
//ইসলাম_ও_নৈতিক_শিক্ষা = parseFloat(prompt('Enter your Marks : on ইসলাম ও নৈতিক শিক্ষা '));
//হিন্দু_ধর্ম_ও_নৈতিক_শিক্ষা = parseFloat(prompt('Enter your Marks : on হিন্দু ধর্ম ও নৈতিক শিক্ষা '));
//বাংলাদেশ_ও_বিশ্বপরিচয় = parseFloat(prompt('Enter your Marks : on বাংলাদেশ ও বিশ্বপরিচয় '));
//শারীরিক_শিক্ষা_স্বাস্থ্য_বিজ্ঞান_ও_খেলাধুলা = parseFloat(prompt('Enter your Marks : on শারীরিক শিক্ষা, স্বাস্থ্য বিজ্ঞান ও খেলাধুলা '));
//উচ্চতর_গণিত = parseFloat(prompt('Enter your Marks : on উচ্চতর গণিত '));










if (বাংলা_সাহিত্য >= 0 && বাংলা_সাহিত্য <= 100){
    বাংলা_সাহিত্য = (100*বাংলা_সাহিত্য)/100;

    if (বাংলা_সাহিত্য >= 80){
        বাংলা_সাহিত্য=('A+');
    }

    else if (বাংলা_সাহিত্য >= 70 && বাংলা_সাহিত্য <= 79){
        বাংলা_সাহিত্য=('A');
    }


    else if (বাংলা_সাহিত্য >= 60 && বাংলা_সাহিত্য <= 69){
        বাংলা_সাহিত্য=('A-');
    }

    else if (বাংলা_সাহিত্য >= 50 && বাংলা_সাহিত্য <= 59){
        বাংলা_সাহিত্য=('B');
    }

    else if (বাংলা_সাহিত্য >= 40 && বাংলা_সাহিত্য <= 49){
        বাংলা_সাহিত্য=('C');
    }

    else if (বাংলা_সাহিত্য >= 33 && বাংলা_সাহিত্য <= 39){
        বাংলা_সাহিত্য=('D');
    }
    else{
        বাংলা_সাহিত্য=('You are faill !');
    }

}


else{
    বাংলা_সাহিত্য=('Marks is not Valed !');
}















if (বাংলা_ভাষার_ব্যাকরণ >= 0 && বাংলা_ভাষার_ব্যাকরণ <= 100){
    বাংলা_ভাষার_ব্যাকরণ = (100*বাংলা_ভাষার_ব্যাকরণ)/100;
    if(বাংলা_ভাষার_ব্যাকরণ >= 80){
        বাংলা_ভাষার_ব্যাকরণ = 'A+';
    }

    else if (বাংলা_ভাষার_ব্যাকরণ >= 70 && বাংলা_ভাষার_ব্যাকরণ <= 79){
        বাংলা_ভাষার_ব্যাকরণ=('A');
    }


    else if (বাংলা_ভাষার_ব্যাকরণ >= 60 && বাংলা_ভাষার_ব্যাকরণ <= 69){
        বাংলা_ভাষার_ব্যাকরণ=('A-');
    }

    else if (বাংলা_ভাষার_ব্যাকরণ >= 50 && বাংলা_ভাষার_ব্যাকরণ <= 59){
        বাংলা_ভাষার_ব্যাকরণ=('B');
    }

    else if (বাংলা_ভাষার_ব্যাকরণ >= 40 && বাংলা_ভাষার_ব্যাকরণ <= 49){
        বাংলা_ভাষার_ব্যাকরণ=('C');
    }

    else if (বাংলা_ভাষার_ব্যাকরণ >= 33 && বাংলা_ভাষার_ব্যাকরণ <= 39){
        বাংলা_ভাষার_ব্যাকরণ=('D');
    }
    else{
        বাংলা_ভাষার_ব্যাকরণ=('You are faill !');
    }

}



else
বাংলা_ভাষার_ব্যাকরণ=('Marks is not Valed.');


document.write('Your Mark on বাংলা_সাহিত্য : ' + বাংলা_সাহিত্য + '<br>');
document.write('Your Mark on বাংলা_ভাষার_ব্যাকরণ : ' + বাংলা_ভাষার_ব্যাকরণ + '<br>');




