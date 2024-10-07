"use client";

// NextJS 13 requires this. Remove if you are using NextJS 12 or lower
import { BellAlertIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import * as React from "react";
import { useEffect } from "react";
import { Button } from "./button";

const ChangelogWidget: React.FC<{
    type?: "page" | "button";
}> = ({ type = "page" }) => {
    useEffect(() => {
        const win = window as any;

        if (typeof win.Featurebase !== "function") {
            win.Featurebase = function () {
                // eslint-disable-next-line prefer-rest-params
                (win.Featurebase.q = win.Featurebase.q || []).push(arguments);
            };
        }
        win.Featurebase("embed", {
            /* Required */
            organization: "thinkthankmedia", // Replace this with your organization name, copy-paste the subdomain part from your Featurebase workspace url (e.g. https://*yourorg*.featurebase.app)

            /* Optional */
            basePath: "/changelog", // Sync urls between your website & our embed. Example: '/feedback'. Refer to the url synchronizing section below to learn more.

            // Aesthetic or Display
            theme: "light", // options: light [default], dark. Remove for auto.
            initialPage: "Changelog", // options: Board [default], Changelog, Roadmap
            hideMenu: false, // Hides the top navigation bar
            hideLogo: false, // Hides the logo in the top navigation bar & leaves the Sign In button visible.

            filters: null, // Default filters to apply to the board view. Copy the filters from the URL when you have the filters you want selected. Example: 'b=63f827df2d62cb301468aac4&sortBy=upvotes:desc'
            jwtToken: null, // Automatically sign in a user with a JWT token. See the JWT section below.
            metadata: null, // Attach session-specific metadata to feedback. Refer to the advanced section for the details: https://help.featurebase.app/en/articles/3774671-advanced#7k8iriyap66
            locale: "en" // Change the language, view all available languages from https://help.featurebase.app/en/articles/8879098-using-featurebase-in-my-language
        });
    }, []);

    return (
        <>
            <Script src="https://do.featurebase.app/js/sdk.js" id="featurebase-sdk" />
            {type === "button" ? (
                <div>
                    <Button data-featurebase-changelog>
                        <BellAlertIcon className="size-4" />
                        <span id="fb-update-badge"></span>
                    </Button>
                </div>
            ) : (
                <div data-featurebase-embed></div>
            )}
        </>
    );
};

export default ChangelogWidget;
