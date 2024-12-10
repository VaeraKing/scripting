console.log("test1");

// test
function write() {
    console.log("test1");

// inputs
    var adjective = document.getElementById('adjective').value;
    var month = document.getElementById('month').value;
    var fourdigitnumber = document.getElementById('fourdigitnumber').value;
    var adjective = document.getElementById('adjective').value;
    var adjective = document.getElementById('adjective').value;
    var adjective = document.getElementById('adjective').value;

// radio button
    var villian = document.querySelector('input[name="villian"]:checked').value;

// validate radio button
    var villianMessage;

    if (villian == "monsters") {
        villianMessage = "monsters"
    }
    else if (villian == "vampires") {
        sznMessage = "vampires"
    }
    else if (szn == "aliens") {
        villianMessage = "aliens"
    }
    else if (villian == "robots") {
        villianMessage = "robots"
    }

    // inputs
    var planet = document.getElementById('planet').value;
    var superpower = document.getElementById('superpower').value;
    var nounplural = document.getElementById('noun plural').value;
    var nounplural2 = document.getElementById('noun plural2').value;
    var malename = document.getElementById('malename').value;
    var colour = document.getElementById('colour').value;
    var colour2 = document.getElementById('colour2').value;
    var substance = document.getElementById('substance').value;
    var substance2 = document.getElementById('substance2').value;
    var animal = document.getElementById('animal').value;
    var sound = document.getElementById('sound').value;
    var country = document.getElementById('country').value;
    var substance3 = document.getElementById('substance3').value;
    var verb = document.getElementById('verb').value;
    var planet2 = document.getElementById('planet2').value;

    // output

    document.getElementById('output').innerHTML =  "One " +adjective+  " morning in " +month+ " of " +fourdigitnumber+ " the world was in complete disorder, and they called upon a hero who would be able to rescue them from the " +villian+ " invasion. The planet " +planet+ " must have heard their cry for help as they sent one of their freshly graduated heroes all the way on a 3-year journey to earth. He had the powers of " +superpower+ " and " +superpower+ " but was unfortunately stuck with the weaknesses of " +nounplural+ " and " +nounplural2+ ". Meet " +malename+ " his costume was " +colour+ ", and " +colour2+ " made from pure " +substance+ " and " +substance2+ ". His trusty sidekick was an" +animal+ " named " +sound+ ". Suddenly the world fell into utmost chaos as the" +villian+ "where beginning to take over all the capital cities of " +country+ ". " +malename+ " had to act quickly and use his power of " +superpower+ " to deter the " +villian+ " away from citizens of " +country+ ". As soon as he arrived, he quickly realized they had learned of his weakness and had prepared by wearing armor covered in " +nounplural+ ". Just when " +malename+ " is about to give up after fighting with all his might he discovers the " +villian+ " weakness is " +substance3+ " and fortunately the pair of socks he decided to wear today is made of " +substance3+ "! He immediately tears off his " +substance+ " shoes and his " +substance3+ " socks radiate to all the " +villian+ ", and they retreat " +verb+ " back to their home planet of " +planet2+ ". " +malename+ " won his first fight and saved country " +country+ "! He still has lots of learning to do but he feels a surge of confidence in his ability to serve and protect as he was required to for the mission. He will now travel back to " +planet+ " and report back to his leaders hoping to get the job of protecting earth. THE END." 
}
