function solution(numbers) {
    let answer = 0;
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            for(let k=j+1; k<numbers.length; k++){
                if(numbers[i] + numbers[j] + numbers[k] === 0){
                    answer += 1;
                } 
            }
        }

    }
    return answer;
}