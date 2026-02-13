const mainnav = document.querySelector('.nav-links');
const hambutton = document.querySelector('.nav-menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

// Footer JavaScript
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = `Last Modification <span class="highlight">${document.lastModified}</span>`;

// Feedback Count JavaScript
if (window.location.pathname.includes('feedback.html')) {
  let reviewCount = localStorage.getItem('feedbackCount') || 0;
  reviewCount++;
  localStorage.setItem('feedbackCount', reviewCount);

  const reviewDisplay = document.querySelector(".feedback-count");
  if (reviewDisplay) {
    reviewDisplay.textContent = reviewCount;
  }
}

// Call to action button JavaScript 
document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const viewLatestDataBtn = document.getElementById('view-latest-data');
  const feedbackLink = document.getElementById('feedback');

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
      window.location.href = 'about-us.html';
    });
  }

  if (viewLatestDataBtn) {
    viewLatestDataBtn.addEventListener('click', () => {
      window.location.href = 'data-center.html';
    });
  }

  if (feedbackLink) {
    feedbackLink.addEventListener('click', () => {
      window.location.href = 'contact-us.html';
    });
  }
});

/* Data Center JavaScript */
window.onload = function () {
  if (window.location.pathname.includes('data-center.html')) {
    const boysEnrol = parseInt(document.getElementById('boys-enrol').textContent);
    console.log(boysEnrol);
    const girlsEnrol = parseInt(document.getElementById('girls-enrol').textContent);
    const totalEnrol = boysEnrol + girlsEnrol;
    document.getElementById('total-enrol').textContent = totalEnrol;

    const malesStaff = parseInt(document.getElementById('males-staff').textContent);
    const femalesStaff = parseInt(document.getElementById('females-staff').textContent);
    const totalStaff = malesStaff + femalesStaff;
    document.getElementById('total-staff').textContent = totalStaff;

    const enrollmentRegardlessOfAge = totalEnrol;
    const enrollmentOfStudentsWithOfficialAge = 22000;
    const population = 32000;
    const grossEnrolmentRate = (enrollmentRegardlessOfAge / population) * 100;
    const netEnrolmentRate = (enrollmentOfStudentsWithOfficialAge / population) * 100;
    const pupilTeacherRatio = totalEnrol / totalStaff;
    const genderParityIndex = girlsEnrol / boysEnrol;

    document.getElementById('ger').textContent = `${grossEnrolmentRate.toFixed(2)}%`;
    document.getElementById('ner').textContent = `${netEnrolmentRate.toFixed(2)}%`;
    document.getElementById('ptr').textContent = pupilTeacherRatio.toFixed(2);
    document.getElementById('gpi').textContent = genderParityIndex.toFixed(2);

    const scores = [
      { candidateName: "Vera", score: 20, },
      { candidateName: "Emmanuel", score: 70, },
      { candidateName: "Dinah", score: 65, },
      { candidateName: "Ransford", score: 95, },
      { candidateName: "Eduafo", score: 87, },
      { candidateName: "Violet", score: 56, },
      { candidateName: "Abraham", score: 80, },
      { candidateName: "Obed", score: 89, },
      { candidateName: "Cynthia", score: 92, },
      { candidateName: "Vivian", score: 44, },
    ]

    const passScore = 70;

    function calculateAverageScore(scores) {
      let totalScore = 0;
      for (let i = 0; i < scores.length; i++) {
        totalScore += scores[i].score;
      }
      return totalScore / scores.length;
    }

    function calculatePercentagePass(scores, passScore) {
      let passedStudents = 0;
      for (let i = 0; i < scores.length; i++) {
        if (scores[i].score >= passScore) {
          passedStudents++;
        }
      }
      return (passedStudents / scores.length) * 100;
    }

    function calculatePercentageFail(scores, passScore) {
      let failedStudents = 0;
      for (let i = 0; i < scores.length; i++) {
        if (scores[i].score < passScore) {
          failedStudents++;
        }
      }
      return (failedStudents / scores.length) * 100;
    }

    const averageScore = calculateAverageScore(scores);
    document.getElementById('average-score').textContent = averageScore.toFixed(2);

    const percentagePass = calculatePercentagePass(scores, passScore);
    document.getElementById('percentage-pass').textContent = `${percentagePass.toFixed(1)}%`;

    const percentageFail = calculatePercentageFail(scores, passScore);
    document.getElementById('percentage-fail').textContent = `${percentageFail.toFixed(1)}%`;
  }
}