/**
 * Created by awalpole on 10/04/2014.
 */

// WHAT IS THIS DOING HERE???

// CLEARLY LEFT OVER FROM EARLY WORK

// ADD THIS TO THE RIGHT CONTROLLER

'use strict';
describe('Controller: EditBlogCtrl as AdminEditBlogCtrl', function () {

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var scope;
  var $q;
  var AdminEditBlogCtrl;

  var blogReturn = [{'_id':{'$oid':'53469c7be4b087495403fc6b'},'content':'Living where I do, in a small village in rural North Wales, getting anywhere means driving along narrow country roads. Most of these are just about passable when two cars meet.\n\nIf you’re driving too close to the centre of the road, when two drivers meet you stop, glare at each other and no one goes anywhere. Drive too close to your nearside and in summer you’ll probably scratch your paintwork on the hedgerows, or in winter you’ll sink your wheels into mud.\n\nDriving these lanes requires a balance between caring for your own vehicle and consideration for someone else’s, but all too often, I’ve seen drivers pushed towards the hedgerows and mud when someone who’s inconsiderate drives too wide because they don’t want to risk scratching their own paintwork or getting their wheels dirty.\n\nIf you learn to ride a motorcycle, you’ll be taught about the command position:\n\nApproximate central position, or any position from which the rider can exert control over invitation space either side.\n\nThe command position helps motorcyclists stay safe, because when they ride in the centre of their lane it prevents other people, usually car drivers, from driving alongside, either forcing them into the curb or potentially dangerously close to oncoming traffic.\n\nTaking the command position isn’t about motorcyclists being aggressive, it’s about them being confident. It’s them knowing their rightful place on the road and communicating that through how they ride.\n\nI’ve recently been trying to take that command position when driving my car on our lanes. When I see someone coming in the opposite direction, instead of instinctively moving closer to my nearside — and in so doing subconsciously invite them into my space on the road — I hold both my nerve and a central position in my lane. Since I done this I’ve noticed that other drivers more often than not stay in their lane or pull closer to their nearside so we occupy equal space on the road. Although we both still need to watch our wing mirrors, neither of us gets our paint scratched or our wheels muddy.\n\nWe can apply this principle to business too, in particular to negotiations and the way we sell. Here’s how we might do that.\n\nCOMMANDING NEGOTIATIONS\nWhen a customer’s been sold to well — more on that in just a moment — and they’ve made the decision to buy, the thing that usually stands in the way of us doing business is a negotiation over price. Some people treat negotiations as the equivalent of driving wide. They act offensively, because their aim is to force the other person into getting less, usually in return for giving more.\n\nIn encounters like this, it’s easy for us to act defensively. We might lack confidence in the price we ask for, or the value of the product or service we offer. We might compromise too early because of that. When that happens, there’s a pretty good chance that we’ll drive away with less than we deserve unless we use the command position principle to help us.\n\nBefore we start any negotiation it’s important to know that both sides ultimately want to reach an agreement. This isn’t always obvious. If one side isn’t already committed, at least in principle, then it’s not a negotiation at that point, it’s something else.','title':'The Command Principle','author':'Andy Walpole','category':'Code','publishedDate':'1397136506000','id':'139713','url':'the-command-principle','contentSnippet':'ing where I do, in a small village in rural North Wales, getting anywhere means driving along narrow country roads. Most of these ...'},{'_id':{'$oid':'53469cd0e4b087495403fcce'},'title':'Managing a Mind','author':'Andy Walpole','category':'Code','content':'On 21 May 2013, I woke in a hospital bed feeling exhausted, disorientated and ashamed. The day before, I had tried to kill myself.\n\nIt’s very hard to write about this and share it. It feels like I’m opening up the deepest recesses of my soul and laying everything bare, but I think it’s important we share this as a community. Since starting tentatively to write about my experience, I’ve had many conversations about this: sharing with others; others sharing with me. I’ve been surprised to discover how many people are suffering similarly, thinking that they’re alone. They’re not.\n\nDue to an insane schedule of teaching, writing, speaking, designing and just generally trying to keep up, I reached a point where my buffers completely overflowed. I was working so hard on so many things that I was struggling to maintain control. I was living life on fast-forward and my grasp on everything was slowly slipping.\n\nOn that day, I reached a low point – the lowest point of my life – and in that moment I could see only one way out. I surrendered. I can’t really describe that moment. I’m still grappling with it. All I know is that I couldn’t take it any more and I gave up.\n\nI very nearly died.\n\nI’m very fortunate to have survived. I was admitted to hospital, taken there unconscious in an ambulance. On waking, I felt overwhelmed with shame and overcome with remorse, but I was resolved to grasp the situation and address it. The experience has forced me to confront a great deal of issues in my life; it has also encouraged me to seek a deeper understanding of my situation and, in particular, the mechanics of the mind.\n\nTHE RELENTLESS PACE OF CHANGE\nWe work in a fast-paced industry: few others, if any, confront the daily challenges we face. The landscape we work within is characterised by constant flux. It’s changing and evolving at a rate we have never experienced before. Few industries reinvent themselves yearly, monthly, weekly… Ours is one of these industries. Technology accelerates at an alarming rate and keeping abreast of this change is challenging, to say the least.\n\nAs designers it can be difficult to maintain a knowledge bank that is relevant and fit for purpose. We’re on a constant rollercoaster of endless learning, trying to maintain the pace as, daily, new ideas and innovations emerge — in some cases fundamentally changing our medium.\n\nUnder the pressure of client work or product design and development, it can be difficult to find the time to focus on learning the new skills we need to remain relevant and functionally competent. The result, all too often, is that the edges of our days have eroded. We no longer work nine to five; instead we work eight to six, and after the working day is over we regroup to spend our evenings learning. It’s an unsustainable situation.','publishedDate':'1397136591000','id':'139713','url':'managing-mind','contentSnippet':'21 May 2013, I woke in a hospital bed feeling exhausted, disorientated and ashamed. The day before, I had tried to kill ...'},{'_id':{'$oid':'53472312e4b07320916d21a6'},'title':'Why Bother with Accessibility?','author':'Andy Walpole','category':'Accessibility','content':'Web accessibility (known in other fields as inclusive design or universal design) is the degree to which a website is available to as many people as possible. Accessibility is most often used to describe how people with disabilities can access the web.\n\nHOW WE APPROACH ACCESSIBILITY\nIn the web community, there’s a surprisingly inconsistent approach to accessibility. There are some who are endlessly dedicated to accessible web design, and there are some who believe it so intrinsic to the web that it shouldn’t be considered a separate topic. Still, of those who are familiar with accessibility, there’s an overwhelming number of designers, developers, clients and bosses who just aren’t that bothered.\n\nOver the last few months I’ve spoken to a lot of people about accessibility, and I’ve heard the same reasons to ignore it over and over again. Let’s take a look at the most common excuses. something here\n\nEXCUSE 1: “PEOPLE WITH DISABILITIES DON’T REALLY USE THE WEB”\nAccessibility will make your site available to more people — the inclusion case\nIn the same way that the accessibility of a building isn’t just about access for wheelchair users, web accessibility isn’t just about blind users and screen readers. We can affect positively the lives of many people by making their access to the web easier.\n\nThere are four main types of disability that affect use of the web:\n\nVisual\nBlindness, low vision and colour-blindness\nAuditory\nProfoundly deaf and hard of hearing\nMotor\nThe inability to use a mouse, slow response time, limited fine motor control\nCognitive\nLearning difficulties, distractibility, the inability to focus on large amounts of information','url':'why-bother-accessibility','contentSnippet':'accessibility (known in other fields as inclusive design or universal design) is the degree to which a website is available to ...'}];

  // load the controller's module
  beforeEach(module('portfolioApp.blogAdminController', 'testConstants', 'portfolioApp.blogAdminService', 'underscore'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    AdminEditBlogCtrl = $controller('EditBlogCtrl as AdminEditBlogCtrl', {
      $scope: scope
    });

  }));

  it('Checks that blog data is returned and added to local scope blogContent', function () {

    var deferred = $q.defer();
    var promise = deferred.promise;

    promise.then(function(value) { scope.blogContent = value; });
    expect(scope.blogContent).toBe(null);

    deferred.resolve(blogReturn);

    expect(scope.blogContent).toBe(null);

    $rootScope.$apply();

    expect(scope.blogContent).toEqual(blogReturn);

  });

});


