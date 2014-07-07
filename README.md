fetch-something
===============

Wrapper for jQuery $.get() to fetch from a url and return custom callbacks

Intention
=========

For a recent project, I was using $.get() to retrieve data from an external url and fire different functions based on the contents of that request.

Instead of having lines and lines of if statements, I created this really simple wrapper for $.get() which uses callbacks to trigger the custom funcitonality I would need.

Usage
=====

You call this simple function and pass your different cases in as callback functions. In this case, your intention is to get data from a JSON url and act upon it based on the data it returns.

If the call is successfull (HTTP 200 OK) but the data isn't there, you want to fire something different.

    fetchSomethingFromURL('http://some/url/that/returns/json/, {
        failOver: {
            // A successfull call, but when the data you want isn't contained
        },
        custom: {
            // Call was successfull and contains the data you want
        },
        success: {
            // Call was successfull but we don't care about the data being correct
        },
        fail: {
            // Call failed, weep onto your keyboard
        }
    });
