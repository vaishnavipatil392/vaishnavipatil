$(document).ready(function () {

    // Search Jobs
    $("#searchBtn").click(function () {

        let title = $("#jobTitle").val().trim().toLowerCase();
        let location = $("#jobLocation").val().trim().toLowerCase();

        let visibleJobs = 0;

        $(".job-card").each(function () {

            let jobTitle = $(this).find("h3").text().toLowerCase();
            let jobLocation = $(this)
                .find(".job-details span:first")
                .text()
                .toLowerCase();

            let titleMatch = jobTitle.includes(title);
            let locationMatch = jobLocation.includes(location);

            if (titleMatch && locationMatch) {

                $(this).show();
                visibleJobs++;

            } else {

                $(this).hide();

            }

        });

        // Display number of matching jobs
        $("#jobCount").text(
            visibleJobs + (visibleJobs === 1
                ? " job found"
                : " jobs found")
        );

        // Show message when no jobs match
        if (visibleJobs === 0) {
            $("#noResults").show();
        } else {
            $("#noResults").hide();
        }

    });

    // Search when Enter is pressed
    $("#jobTitle, #jobLocation").keypress(function (event) {

        if (event.which === 13) {
            $("#searchBtn").click();
        }

    });

    // Login Button
    $("#loginBtn").click(function () {
        alert("Login functionality will be added soon!");
    });

    // Apply Now Buttons
    $(".apply-btn").click(function () {

        let jobTitle = $(this)
            .closest(".job-card")
            .find("h3")
            .text();

        alert("You selected: " + jobTitle);

    });

});