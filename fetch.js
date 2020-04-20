async postInfo() {
        let data = this.state.mealsArray;
        let jsonData = JSON.stringify(data) //[{"dishes":[{"name":"pizza","amount":"500","calories":228}],"mealTime":{"time":"20:00","timeObject":true},"id":null}]
        let res = await fetch(this.url, {
            method: "POST",
            "Access-Control-Allow-Origin": "*",
            mode: "cors",
            'Content-Type': "application/json"
        }, jsonData);
        if(!res.ok) {
            throw Error(`Could not fetch ${this.url}, recived ${res.status}`)
        }
        return await res.json();
    };
