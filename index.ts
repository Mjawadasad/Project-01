function countdown(seconds: number) {
    let remainingTime = seconds;

    const intervalId = setInterval(() => {
        console.log(`Time remaining: ${remainingTime} seconds`);
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(intervalId);
            console.log('Time’s up!');
        }
    }, 1000);
}

countdown(10);
